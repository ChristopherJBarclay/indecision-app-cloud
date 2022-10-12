// this is the secondary user app that was written during the first part of section 3

const user = {
    name: 'Christopher',
    age: 31,
    location: 'San Diego'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
    // do not need else {return undefined}; it is implicitly returned if you do not explicitly return it
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);