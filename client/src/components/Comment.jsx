// eslint-disable-next-line react/prop-types
export default function Comment({ email, text }) {
    return (
        <>
          
                <strong>{ email }</strong> Commented:<br />
                {text}
            

        </>
    )
}