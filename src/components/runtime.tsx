// channel可以关联到proxy
// channel可以是多对多的关系，有点像是golang的channel
export class CBChannel {

}

// 或许channel应该属于proxy
// 每一个Component都有一个proxy，进而也有一个channel，它是类似erlang actor类的概念

export class CBRuntime {

}

const rawChannel = new CBChannel();
const encodedChannel = new CBChannel();
