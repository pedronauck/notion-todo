const { Client } = require('@notionhq/client')
const { camelizeKeys } = require('humps')

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

const DATABASE_ID = 'ec15e603923844e99df39a91c96bffe8'

export default async (req, res) => {
  const { completed } = req.query
  const data = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      property: 'Done',
      checkbox: {
        equals: Boolean(completed),
      },
    },
  })
  res.status(200).json(camelizeKeys(data.results))
}
