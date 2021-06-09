const { Client } = require('@notionhq/client')
const { camelizeKeys } = require('humps')

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

const DATABASE_ID = 'ec15e603923844e99df39a91c96bffe8'

export default async (req, res) => {
  const data = await notion.pages.create({
    parent: { database_id: DATABASE_ID },
    properties: {
      Name: { title: [{ text: { content: req.body.text } }] },
      Done: { checkbox: false },
    },
  })

  res.status(200).json(camelizeKeys(data.results))
}
