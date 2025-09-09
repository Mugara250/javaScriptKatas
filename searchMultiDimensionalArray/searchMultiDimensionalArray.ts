function locate(arr: string[], value: string) {
    return arr.flat(Infinity).includes(value) ? true : false;
}
