import { test } from '@api/nested/test';

function api() {
  return {
    success: true,
    test,
  };
}

export { api };
