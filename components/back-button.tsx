"use client"

export default function BackButton() {
    return <button onClick={() => history.back()}><u>Go back</u></button>
}
