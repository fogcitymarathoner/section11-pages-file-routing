import {useRouter} from "next/router";

export default function ClientsPage(){
    const router = useRouter();
    console.log(router.query);
    function clientProjectButton(){
        router.push(
            {
                pathname: '/clients/[id]/[projectId]',
                query: {id: router.query.id,
                projectId: 'projectA'}
            })
    }
    return (
        <div>
            <h1>Client id: {router.query.id} Page</h1>
            <button onClick={clientProjectButton}>Project</button>
        </div>
    )

}