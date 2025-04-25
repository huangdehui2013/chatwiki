import request from '@/utils/http/axios'

export const getRobotList = (params = {}) => {
  return request.get({
    url: '/manage/getRobotList',
    params: params
  })
}

export const saveRobot = (data = {}) => {
  return request.post({
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    url: '/manage/saveRobot',
    data: data
  })
}

export const getRobotInfo = ({ id }) => {
  return request.get({
    url: '/manage/getRobotInfo',
    params: { id }
  })
}

export const deleteRobot = ({ id }) => {
  return request.post({
    url: '/manage/deleteRobot',
    data: {
      id
    }
  })
}

export const editPrompt = ({ id, prompt }) => {
  return request.post({
    url: '/manage/editPrompt',
    data: {
      id,
      prompt
    }
  })
}

export const checkSensitiveWords = (data = {}) => {
  return request.post({
    url: '/manage/checkSensitiveWords',
    data: data
  })
}

// 发起GPT提问前置判断
export const checkChatRequestPermission = (data = {}) => {
  return request.post({
    url: '/chat/checkChatRequestPermission',
    data: data
  })
}