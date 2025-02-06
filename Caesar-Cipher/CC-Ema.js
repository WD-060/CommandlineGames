const args = process.argv.slice(2);

const alphabet = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];

if(args !== alphabet) {
    console.error('Please use the English alphabet only.')
    return;
}

