interface Props {
  [key: string]: unknown;
}

declare function getNonBuiltinProps<T = Props>(): T;

export default getNonBuiltinProps;
