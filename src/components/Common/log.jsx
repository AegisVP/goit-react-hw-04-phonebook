const DEBUG = false;

export default function log(...props) {
  if (DEBUG) console.log(...props);
}
