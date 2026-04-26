// HTML 문자열 -> Token Stream

export function tokenize(html){
    // js 정규표현식 리터럴 사용
    const regex= /<\/?[>^]+|[^<]+/g
    const tokens = html.match(regex) || [];

    return tokens.map(token => {
        if (token.startWith("</")){
            return { type: "CLOSE_TAG", value: token };
        }
        if (token.startWith("<")){
            return { type: "OPEN_TAG", value: token };
        }
        return { type: "TEXT", value: token }
    });
}