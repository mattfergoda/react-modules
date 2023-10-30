import { choice, remove } from "./helpers";
import FRUIT from "./foods";

const RANDOM_FRUIT = choice(FRUIT);
console.log(`I'd like one ${RANDOM_FRUIT}, please`);
console.log(`Here you go: ${RANDOM_FRUIT}`);
remove(FRUIT, RANDOM_FRUIT);
console.log("Delicious! May I have another?");
console.log(`I'm sorry, we're all out. We have ${FRUIT.length} left.`);