import json

count = 1
with open(r"C:\Users\Rafin\.gemini\antigravity\brain\e08b0b5e-c562-413b-9cd9-ca6085b58777\.system_generated\logs\transcript_full.jsonl", "r", encoding="utf-8") as f:
    for line in f:
        try:
            data = json.loads(line)
            if data.get("type") == "PLANNER_RESPONSE":
                tool_calls = data.get("tool_calls", [])
                for call in tool_calls:
                    if call.get("name") == "write_to_file":
                        args = call.get("args", {})
                        target = args.get("TargetFile", "")
                        if "assistant/page.tsx" in target.replace("\\", "/"):
                            print(f"FOUND write_to_file for {target}")
                            with open(f"extracted_assistant_dashboard_{count}.tsx", "w", encoding="utf-8") as out:
                                out.write(args.get("CodeContent", ""))
                            count += 1
        except Exception as e:
            pass
