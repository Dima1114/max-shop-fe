export function formRequestProps(getProps) {

    const props = Object.keys(getProps).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(getProps[key])
    }).join('&');

    return props ? '?' + props : ''
}
