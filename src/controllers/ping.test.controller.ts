import { Get, Route, Tags } from "tsoa";

interface PingResponse {
    message: string;
}

@Route("ping")
@Tags("ping")
export class PingController {
    @Get("/")
    public async getMessage(): Promise<PingResponse> {
        return {
            message: "ping-200",
        };
    }
}

