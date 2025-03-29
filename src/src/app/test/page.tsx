"use client"

// import "@/styles/test.css"
import { useRef } from "react"

const Test = () => {
  const ref = useRef<HTMLDivElement | null>(null)

  const onClick = () => {
    ref.current?.classList.add("flip")
  }

  return (
    <div 
      className="page"
      ref={ref} 
      onClick={() => onClick()}
      >
      <div className="w-[50px] h-[500px] absolute !right-0" />
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <div>
                              <div>
                                <div>
                                  <div>
                                    <div>
                                      <div>
                                        <div>
                                          <div>
                                            <div>
                                              <div>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <div></div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test;