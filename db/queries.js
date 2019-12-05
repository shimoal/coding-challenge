const db = require('./database')
const Link = require('./LinkModel')

const findAllLinks = (req, res) => {
  const links = Link.findAll()
  res.status(200).send(links)
}

const createLink = (req, res) => {
  const link = Link.build({
    linkName: req.body.linkName
  })
  link.save().then(() => {
    res.status(200).send(link)
  }).catch((err) => {
    console.log("ERROR CREATING LINK: ", err)
  })
}

module.exports = { findAllLinks, createLink }
