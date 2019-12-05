const db = require('./database')
const Link = require('./LinkModel')

const findAllLinks = (req, res) => {
  const links = Link
    .findAll()
    .then((data) => {
      res.json(data)
    }).catch((err) => {
      console.log("ERROR FINDING LINKS: ", err)
    })
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

const updateLink = (req, res) => {
  const { linkName, clickCount } = req.body
  if (linkName) {
    Link.update({
      linkName: linkName,
    },
    {
      returning: true, where: {id: req.params.linkId}
    }).then(data => {
      res.json(data[1][0])
    }).catch((err) => {
      console.log("ERROR UPDATING LINK: ", err)
    })
  }

  if (clickCount) {
    Link.update({
      clickCount: clickCount,
    },
    {
      returning: true, where: {id: req.params.linkId}
    }).then(data => {
      res.json(data[1][0])
    }).catch((err) => {
      console.log("ERROR UPDATING LINK: ", err)
    })
  }
}

const deleteLink = (req, res) => {
  Link.destroy({
    where: {
      id: req.params.linkId
    }
  }).then(data => {
    res.status(200).send()
  }).catch((err) => {
    console.log("ERROR DELETING LINK: ", err)
  })
}

module.exports = { findAllLinks, createLink, updateLink, deleteLink }
