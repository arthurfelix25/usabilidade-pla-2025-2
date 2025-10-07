function ObservationList({ observation}) {
    return (
        <ul>
            {observation.map((obs, idx) => (
                <li
                key= {idx}>{obs}</li>
            ))}
        </ul>
    );
}

export default ObservationList;