const ghpages = require('gh-pages');

/*
 * How to publish this project to GitHub pages
 */

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/zachstence/TypeRacerData.git', // Update to point to your repository  
        user: {
            name: 'Zachary Stence', // update to use your name
            email: 'zachstence@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
);