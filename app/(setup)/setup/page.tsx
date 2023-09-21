"use client"; ''
import { redirect } from "next/navigation";
/** Simple page component used only to redirect to first step
 * This way going to "setup/" route makes it a valid route
 * and also redirecting to "setup/1"
*/
const SetupPage = () => redirect("setup/1")

export default SetupPage