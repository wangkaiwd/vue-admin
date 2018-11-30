import { ajaxFunc } from '@/request/tool'
const topics = {
  fetchTopics: ajaxFunc('/api/v1/topics')
}
export default topics