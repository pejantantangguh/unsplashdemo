import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
    applicationId: process.env.UNSPLASH_ACCESS_KEY,
    secret: process.env.UNSPLASH_SECRET_KEY
});

export default unsplash;