/** @type {import('./$types').LayoutLoad} */
export async function load({ url }) {
    return {
        currentPath: url.pathname,
    };
};