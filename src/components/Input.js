const Input = (props) => {
  const { placeholder, input, type, name, id } = props

  const inputField =
    input === 'input' ? (
      <input
        type={type}
        name={name}
        id={id}
        key={id}
        placeholder={placeholder}
      />
    ) : (
      <textarea
        name={name}
        id={id}
        key={id}
        placeholder={placeholder}
      />
    )
  return <>{inputField}</>
}

export default Input
