export const getInitials = (text) => {
    const allnames = text.split(' ');
    if (allnames.length >= 2) {
        return (allnames[0][0] + allnames[1][0]).toUpperCase();
    }

    return (allnames[0][0] + allnames[0][1]).toUpperCase();
}


export const formatCommentTime = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = seconds / 31536000;
    if (interval >= 1) {
        return Math.floor(interval) + " y";
    }
    interval = seconds / 2592000;
    if (interval >= 1) {
        return Math.floor(interval) + " month";
    }
    interval = seconds / 86400;
    if (interval >= 1) {
        return Math.floor(interval) + " d";
    }
    interval = seconds / 3600;
    if (interval >= 1) {
        return Math.floor(interval) + " h";
    }
    interval = seconds / 60;
    if (interval >= 1) {
        return Math.floor(interval) + " m";
    }
    return "a few seconds ago";
}
