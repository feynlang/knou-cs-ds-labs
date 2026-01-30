// Token -> DOM Tree (Stack기반)

// DOM의 최소요구사항: Node 타입체계, 트리구조, 노드식별, 속성접근, DOM순회기능

//1. 클래스(1)--중간자(노드): Document노드, Element노드, Text노드
//   ㄴ 속성: nodeType(각각 9, 1, 3), nodeName, tagName / attributes[속성접근]
//   ㄴ 메서드: getAttribute(name) [속성접근]


// 2. 클래스(2)--output형식(트리): Node 
//   ㄴ 속성: parentNode, childNodes (, children)
//   ~~ㄴ 메서드: DFS, BFS, querySelector~~
// 3. 파서

//ES6 클래스 문법 사용
class Node {
    constructor(){
        this.parentNode=null;
        this.childNodes=[];
    }
    appendChild(node){
        node.parentNode=this;
        this.childNodes.push(node);
    }
}

const NODE_TYPE = {
    DOCUMENT: 9,
    ELEMENT: 1,
    TEXT: 3,
};

export class DocumentNode extends Node{
    constructor(){
        super();
        this.nodeType=NODE_TYPE.DOCUMENT;
        this.nodeName="#document";
    }
}
export class ElementNode extends Node{
    constructor(tagName, attributes){
        super();
        this.nodeType=NODE_TYPE.ELEMENT;
        this.tagName=tagName;
        this.nodeName=tagName.toupperCase();
        this.attributes=attributes;
    }
}
export class TextNode extends Node{
    constructor(text){
        super();
        this.nodeType=NODE_TYPE.TEXT;
        this.nodeName="#text";
        this.textContent=text;
    }
}

// 태그 예외 처리 관련 변수
const VOID_TAGS = new Set(['img', 'br', 'hr', 'wbr', 'embed', 'source', 'track', 'area', 'input', 'meta', 'link', 'base', 'col', 'param'])
const COMMENT_TAGS = new Set(['!--'])

export function buildTree(tokens){
    const document = new DocumentNode();
    let currentNode = document;
    const stack = [];

    //태그 자체와 그에 달린 속성을 처리하는 구간
    for (const token of tokens) {
        //1. 태그 종류와 속성을 구분: 공백 기준
        //2. 속성들 구분: =, "" 기준
        //3. 태그 노드 생성(속성 딕셔너리 필드에 등록) 후 부모노드에 연결
        //4. 부모노드인 현재 노드를 스택에 넣기
        if(token.type === "OPEN_TAG") {
            //태그이름 추출
            const tagMatch=token.value.match(/^<(\w+)([^>]*)>/); // 빈요소를 <tag/>로 사용하는 경우도 그룹을 나누기 때문에 호환가능
            const [, tagName, attrStr] = match;
            const attrs = {};

            //추출한 태그네임 관련 전처리
            tagName = tagName.toLowerCase();
            if(COMMENT_TAGS.has(tagName)) { continue; }

            //속성 추출
            attrStr.replace(/(\w+)="([^"]*)"/g,(_,k,v)=>{
                attrs[k]=v;
            })

            //Node만들어서 트리에 연결
            const elNode = new ElementNode(tagName, attrs);
            currentNode.appendChild(elNode);
            
            //빈 태그가 아닐때에만 스택 push
            if(!VOID_TAGS.has(tagName)){
                stack.push(currentNode); 
            }

            //트리 생성 다음단계로 ㄱㄱ(포인터 조정)
            currentNode = elNode;
        }
        //닫는 태그를 만나면 포인터를 해당 태그의 부모 태그로.
        if(token.type === "CLOSE_TAG") {
            if(token.parentNode!=null)
            currentNode = stack.pop();
        }

        //텍스트 스트링 전처리, 텍스트노드 생성, 자식으로 연결만
        if(token.type === "TEXT") {
            const text = token.value.trim();
            if(text){
                currentNode.appendChild(new TextNode(text));
            }
        }
    }
    return document;
}

