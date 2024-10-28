export function TwitterFollowCard ({userName, name, isFollowing, imageSrc}) {
    return (
        <article className='twitter-card'>
            <header className='twitter-card-header'>
                <img 
                    alt="user image of taylor swift" 
                    src={imageSrc}
                    className='twitter-card-image'
                />
                <div className='card-info'>
                    <strong>{name}</strong>
                    <span className='userName'>{userName}</span>
                </div>
            </header>

            <aside>
                <button className='follow-button'>
                    Follow
                </button>
            </aside>
        </article>
    )
}