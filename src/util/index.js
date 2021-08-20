export const getInitials = (text) => {
    const allnames = text.split(' ');
    if (allnames.length >= 2) {
        return (allnames[0][0] + allnames[1][0]).toUpperCase();
    }

    return (allnames[0][0] + allnames[0][1]).toUpperCase();
}
