'use client'
import { useState, FormEvent } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

function NewsletterApuntate() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<Status>('idle')
    const [errorMsg, setErrorMsg] = useState('')

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!email) return

        setStatus('loading')
        setErrorMsg('')

        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email }),
            })

            if (!res.ok) {
                const data = await res.json()
                throw new Error(data.error || 'Error al suscribirse')
            }

            setStatus('success')
            setName('')
            setEmail('')
        } catch (err) {
            setStatus('error')
            setErrorMsg(err instanceof Error ? err.message : 'Algo salió mal, intenta de nuevo.')
        }
    }

    return (
        <div id="newsletter-section" className="flex flex-col items-center bg-dark-purple w-full md:w-3/5 text-white rounded-none md:rounded-xl">
            <span className="pt-12 text-3xl text-center md:px-0 px-4 font-comic">¡Suscríbete a la Newsletter de Crimen.mp3!</span>
            <p className="text-xl pt-6 text-center md:px-20 px-4 font-neue">
                Mantente al tanto de todo lo que sucede en Crimen.mp3. Al suscribirte, recibirás:
            </p>
            <div className="flex flex-col font-neue text-xl">
                <span className="pt-3">● Avances exclusivos de nuevos episodios</span>
                <span>● Noticias y actualizaciones del podcast</span>
                <span>● Contenidos adicionales</span>
                <span>● Notificaciones de lanzamientos</span>
            </div>

            {status === 'success' ? (
                <div className="flex flex-col items-center py-16 px-4 text-center">
                    <span className="text-3xl font-comic">¡Ya estás dentro!</span>
                    <p className="font-neue text-xl pt-4">Gracias por suscribirte. Pronto tendrás noticias de Crimen.mp3.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
                    <span className="pt-3 px-4 text-xl font-neue items-center text-center">
                        Suscríbete ahora y sé parte de nuestra comunidad.
                    </span>
                    <div className="flex flex-col space-y-3 pt-8 md:w-96 w-full md:px-0 px-10">
                        <input
                            className="md:w-96 text-black rounded-md py-2 pl-3 bg-gray placeholder:text-stone-700 font-neue focus:border-light-purple focus:border border border-black focus:outline-none focus:ring-0"
                            type="text"
                            placeholder="Nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            className="md:w-96 text-black rounded-md py-2 pl-3 bg-gray placeholder:text-stone-700 font-neue focus:border-light-purple focus:border border border-black focus:outline-none focus:ring-0"
                            type="email"
                            placeholder="Email *"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {status === 'error' && (
                        <p className="pt-3 font-neue text-red-300 text-sm">{errorMsg}</p>
                    )}
                    <div className="pt-8 pb-12">
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="rounded-xl bg-light-purple text-white px-20 py-2 font-neue hover:scale-105 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {status === 'loading' ? 'Enviando…' : 'Suscribirme'}
                        </button>
                    </div>
                </form>
            )}
        </div>
    )
}

export default NewsletterApuntate;
