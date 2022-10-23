import createHandler from '../../../lib/middlewares/nextConnect'
import validate from '../../../lib/middlewares/validation'
import { filterCarUser } from '../../../modules/user/filtercar.service'
import { filterSchema } from '../../../modules/user/filter.schema'

const carFilter = createHandler()

carFilter.post(validate({ body: filterSchema }), async (req, res) => {
  try {
    const carFilter = await filterCarUser(req.body)
    res.status(200).json(carFilter)
  } catch (err) {
    console.error(err)
    throw err
  }
})

export default carFilter
