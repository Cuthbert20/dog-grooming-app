<select name="" id="">
                    {/* name="" id="" */}
                        {this.props.dog_ids.map(elm => {
                            return (
                                <option key={elm.dog_id} value={elm.dog_name}>{elm.dog_name}</option>
                            )
                        })}
</select>