async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <div>
            <h1>page #{id}</h1>
        </div>
    );
}

export default page;
