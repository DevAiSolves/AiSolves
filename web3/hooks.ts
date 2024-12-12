import { 
    createThirdwebClient 
} from "thirdweb";

export const client = createThirdwebClient({ clientId: import.meta.env.VITE_PUBLIC_PROJECT_ID })