import React from 'react'
import {RequestContainer, RequestH1, RequestP} from './RequestElements'
import {Button} from '../../Button'

const Request = () => {
  return (
    <RequestContainer id='request'>
      <RequestH1>
        Couldn't find what you were looking for?
      </RequestH1>
      <RequestP>
        We are sorry to hear that. You can get in contact with us now and request the specific service you need and we will see what we can do for you. Don't hesitate to reach us!
      </RequestP>
      <Button>Make a request</Button>
    </RequestContainer>
  )
}

export default Request