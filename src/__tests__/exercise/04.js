// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', () => {
  let submittedData
  function handleSubmit(data) {
    submittedData = data
  }

  render(<Login onSubmit={handleSubmit} />)

  const username = 'evgeniy'
  const password = '123456'

  userEvent.type(screen.getByLabelText(/username/i), username)
  userEvent.type(screen.getByLabelText(/password/i), password)
  userEvent.click(screen.getByText(/submit/i))

  expect(submittedData).toEqual({
    username,
    password,
  })
})

/*
eslint
  no-unused-vars: "off",
*/
