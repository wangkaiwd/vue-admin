import { ajaxFunc } from '@/request/tool'

const element = {
  fetchSeller: ajaxFunc('/seller'),
  fetchGoods: ajaxFunc('/goods'),
  fetchRatings: ajaxFunc('/ratings')
}
export default element