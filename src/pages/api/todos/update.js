const { Client } = require('@notionhq/client')
const { camelizeKeys } = require('humps')

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export default async (req, res) => {
  const todo = await notion.pages.update({
    page_id: req.body.id,
    properties: {
      Done: {
        checkbox: req.body.done,
      },
    },
  })
  res.status(200).json(camelizeKeys(todo))
}
