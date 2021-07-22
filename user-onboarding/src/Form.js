export default function Form (props) {
    const { update, submit, values } = props

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        update(name, valueToUse)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
    <form onSubmit={onSubmit}>
        <h2>User Information</h2>
        <label>Name
            <input
                type='text'
                name='name'
                value={values.name}
                onChange={onChange}
            />
        </label>
        <label>Email
            <input
                type='text'
                name='email'
                value={values.email}
                onChange={onChange}
            />
        </label>
        <label>Password
            <input
                type='text'
                name='password'
                value={values.password}
                onChange={onChange}
            />
        </label>
        <label>Terms of Service
            <input
                type='checkbox'
                name='terms'
                onChange={onChange}
                checked={values.terms}
            />
        </label>
        <button>Submit</button>
    </form>
    )
}