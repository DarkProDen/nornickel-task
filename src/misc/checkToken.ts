import Cookies from 'js-cookie';

const checkToken = (): boolean =>
  Cookies.get('access-token') ===
  'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XyrznaBQmF3FoCGGkRpQcgOd5tvOO_4Iy_Iqgcwsvr49uPsKSuBMk3aJOd8P7POVGMrsAx9QMsM71nj2lH9sFA';

export default checkToken;
