import { createIPX, createIPXMiddleware } from "ipx";
const ipx = createIPX({"dir":"D:/Zaid/Work/Human Abstract/assets_dev/testing_setup/ha-test/static","domains":[],"sharp":{},"alias":{}});
export default createIPXMiddleware(ipx);
