type jsonNode = {
        id?: string;
        title?: string;
        description?: string;
        link?: string;
        image?: any;
        skills?: string[]
    }
type projectNode = {
    node: jsonNode;
}
export {
    jsonNode,
    projectNode
}