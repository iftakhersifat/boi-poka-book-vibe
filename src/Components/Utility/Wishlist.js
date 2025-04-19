const getWishlist = () => {
    const exists = localStorage.getItem("wishlist");
    if (exists) {
        const convertExists = JSON.parse(exists);
        return convertExists;
    } else {
        return [];
    }
};

const addWishlist = id => {
    const preExists = getWishlist();
    if (preExists.includes(id)) {
        alert("Already exists in Wishlist");
    } else {
        preExists.push(id);
        const convertPreExists = JSON.stringify(preExists); // Corrected here
        localStorage.setItem("wishlist", convertPreExists);
    }
};

export { addWishlist, getWishlist };
