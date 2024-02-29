const consts: any = {
  // 
};

for (const x in consts) {
  consts[x] = Object.freeze(consts[x]);
}

export default consts;
export const namespaced = true;