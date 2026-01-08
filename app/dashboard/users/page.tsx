import Link from "next/link"
export default function page() {
    return (
        <div>
            <header className="mb-8">
                <h1>Users</h1>
            </header>

            <ul>
                <li> <Link href="/dashboard/users/1">User 1</Link>   </li>
                <li> <Link href="/dashboard/users/2">User 2</Link>   </li>
                <li> <Link href="/dashboard/users/3">User 3</Link>   </li>
                <li> <Link href="/dashboard/users/4">User 4</Link>   </li>
                <li> <Link href="/dashboard/users/5">User 5</Link>   </li>
            </ul>
        </div>
    )
}
