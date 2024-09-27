import Link from "next/link";

export default function ClientsPage() {
    const clients = [
        {id: 'mc', name: 'marc'},
        {id: 'bw', name: 'beth'},
    ]
    return (
        <div>
            <h1>Clients Page</h1>
            <h2>Regular href</h2>
            {clients.map((client) => (<li key={client.id}>
                <Link href={`/clients/${client.id}`}>{client.name}</Link>
            </li>))}
            <h2>Programatic href</h2>
            {clients.map((client) => (<li key={client.id}>
                <Link href={{
                    pathname: '/clients/[id]',
                    query: {id: client.id}
                }}> {client.name}</Link>
            </li>))}
        </div>
    )

}