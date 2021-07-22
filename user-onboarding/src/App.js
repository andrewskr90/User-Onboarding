import logo from './logo.svg';
import './App.css';
import Form from './Form'
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import User from './User'

const initialUsers = []
const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false
}

function App () {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setUsers([res.data.data])
        console.log(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  const postNewUser = (newUser) => {
    axios.post('https://reqres.in/api/users', newUser)
      .then( res=> {
        setUsers([res.data, ...users])
        console.log(res.data)
      })
      .catch( err => console.log(err))
      .finally(() => setFormValues(initialFormValues))
  }

  const updateForm = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const submitForm = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms
    }
    postNewUser(newUser)

  }

  useEffect(() => {
    getUsers()
  },[])

  return (
    <div className="App">
      <Form 
        update={updateForm}
        submit={submitForm}
        values={formValues}
      />
      <div>
      {
        users.map(user => {
          return (
            <User details={user}/>
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
