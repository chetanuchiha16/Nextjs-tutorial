import uvicorn

def main():
    print("Hello from backend!")
    uvicorn.run("app.app:app",host="localhost", port=8000)


if __name__ == "__main__":
    main()
