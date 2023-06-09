const Log = require('./log')
const mongoose = require('mongoose')
const { ObjectId } = mongoose.Types

const resolvers = {
  getLogs: async () => {
    try {
      const log = await Log.find()
      return log
    } catch (error) {
      throw error
    }
  },

  getLogById: async (args) => {
    try {
      const { id } = args
      const log = await Log.findOne({ id: new ObjectId(id) })
      return log
    } catch (error) {
      throw error
    }
  },

  createLog: async (args) => {
    try {
      const { level, message } = args.log
      const log = new Log({
        id: new ObjectId(),
        level, 
        message,
      });
      const newLog = await log.save()
      return newLog
    } catch (error) {
      throw error
    }
  },

  deleteLogById: async (args) => {
    try {
      const { id } = args
      const log = await Log.findOneAndDelete({ id: new ObjectId(id) })
      return log
    } catch (error) {
      throw error
    }
  }
}

module.exports = resolvers