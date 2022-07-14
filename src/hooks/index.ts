import { ElMessage } from "element-plus";
// 复制文本
export const useCopy = (text: string) => {
  // 创建输入框
  let input = document.createElement("input");
  // 给输入框value赋值
  input.value = text;
  // 追加到body里面去
  document.body.appendChild(input);
  // 选择输入框的操作
  input.select();
  // 执行复制操作
  document.execCommand("Copy");
  // 删除加入的输入框
  document.body.removeChild(input);
  // 提示用户
  ElMessage.success("复制成功");
};

export const useDebounce = (fn: Function, delay: number) => {
  let timer: NodeJS.Timeout; // 通过闭包保存一个标记
  return function () {
    // 因为还没到规定时间又触发了，所以把之前的定时器取消，重新计时

    clearTimeout(timer);

    timer = setTimeout(() => {
      // 如果不用箭头函数的话，this 就指向全局对象了
      // @ts-ignore
      fn.apply(this, arguments);
    }, delay);
  };
};

// 这是一个稍微改造过的防抖，会执行之后一次操作，因为每次传进来的参数不一样，所以要保存最后一次的参数
// 可能这也不叫改造？貌似这样才真正叫节流
export const useThrottle = (fn: Function, delay: number) => {
  let valid = true; // 通过闭包保存一个标记
  let args: any = null;
  return function () {
    args = arguments;
    // 如果在 valid 为 false 的时候触发，代表还没冷却完，不能触发
    if (!valid) {
      return;
    }

    valid = false;

    // fn.apply(this, arguments); 可以放在 setTimeout 函数外面或者里面
    // 放在外面的话，第一次输出不需要冷却
    // 放在里面的话，第一次输出也需要冷却
    // @ts-ignore
    // fn.apply(this, arguments);

    setTimeout(() => {
      // 如果不用箭头函数的话，this 就指向全局对象了
      // @ts-ignore
      fn.apply(this, args);
      // console.log(args, arguments);
      valid = true;
    }, delay);
  };
};
