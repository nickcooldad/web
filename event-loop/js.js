function sum(a){
    function innerSum (b) {
        if(b !== undefined){
            return sum(a + b)
        }
        return a
    }
    
    innerSum['valueOf'] = () => a
    return innerSum
}

console.log(sum(3)(4)(5)(6)(8))

// https://en.wikipedia.org/wiki/REST

// REST defines a set of constraints for how the architecture of a distributed, Internet-scale hypermedia system, such as the Web, should behave

// XMLHttpRequest → axios
// fetch

// REST 
// Fielding defined REST in his 2000 PhD dissertation "Architectural Styles and the Design of Network-based Software Architectures"

// https://en.wikipedia.org/wiki/OpenAPI_Specification