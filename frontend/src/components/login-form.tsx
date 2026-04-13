import { useState, type ChangeEvent } from 'react'
import { Input } from './input'

type Props = {
    onSubmit: (user: string, password: string) => Promise<void>
    error?: string | null
}

export const LoginForm = ({ onSubmit, error }: Props) => {
    const [user, setUser] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const submitLogin = async (e: ChangeEvent) => {
        e.preventDefault()

        await onSubmit(user, password)
    }

    return (
        <>
            <form
                className="flex flex-col items-center justify-center h-screen gap-3.5"
                onSubmit={submitLogin}
            >
                <div className="flex flex-col">
                    <label htmlFor="username" className="self-start mb-2">
                        Username:
                    </label>
                    <Input
                        type="text"
                        id="username"
                        placeholder="username"
                        onChange={(e) => setUser(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password" className="self-start mb-2">
                        Password:
                    </label>
                    <Input
                        type="password"
                        id="password"
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className="border rounded-md border-white h-10 w-[320px] p-2 bg-lime-700 border-none font-black hover:bg-lime-600"
                    type="submit"
                >
                    Log in
                </button>
                {error ? `Error: ${error}` : null}
            </form>
        </>
    )
}
